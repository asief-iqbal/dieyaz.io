-- Dieyaz Portfolio Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    technologies TEXT[] DEFAULT '{}',
    live_url VARCHAR(500),
    github_url VARCHAR(500),
    image_url VARCHAR(500),
    category VARCHAR(100) DEFAULT 'web',
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    level INTEGER DEFAULT 0 CHECK (level >= 0 AND level <= 100),
    icon VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create certifications table
CREATE TABLE IF NOT EXISTS certifications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    issuer VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    credential_id VARCHAR(255),
    credential_url VARCHAR(500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create education table
CREATE TABLE IF NOT EXISTS education (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    degree VARCHAR(255) NOT NULL,
    institution VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    location VARCHAR(255),
    description TEXT,
    gpa DECIMAL(3,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(255),
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);
CREATE INDEX IF NOT EXISTS idx_certifications_issuer ON certifications(issuer);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_skills_updated_at BEFORE UPDATE ON skills
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_certifications_updated_at BEFORE UPDATE ON certifications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_education_updated_at BEFORE UPDATE ON education
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for projects
INSERT INTO projects (title, description, long_description, technologies, live_url, github_url, category, featured) VALUES
(
    'GenWear',
    'AI-powered 3D customizable ecommerce site',
    'AI-powered 3D customizable ecommerce where users can customize, generate or change their product to their specification. Users can view detailed 3D view of products. Developed an AI-driven customizable merchandise store to elevate personalization for users by integrating Next.js, React, Tailwind CSS, and DALL-E 3 (upgrading to stable diffusion).',
    ARRAY['Next.js', 'React', 'Tailwind CSS', 'DALL-E 3'],
    'https://genwear.vercel.app/',
    NULL,
    'web',
    TRUE
),
(
    'Job-Portal',
    'A full-stack recruitment platform to streamline hiring workflows',
    'Built a full-stack recruitment platform to streamline hiring workflows by implementing Node.js/Express backend, React frontend, and Tailwind UI. Enhanced candidate-employer matching accuracy through advanced filtering, role-based access.',
    ARRAY['Node.js', 'Express.js', 'React', 'Tailwind CSS'],
    NULL,
    'https://github.com/asief-iqbal/Job-Portal-App',
    'web',
    TRUE
),
(
    'SnapCafe',
    'Online café ordering system to optimize order processing efficiency and innovation discount system',
    'Designed and developed an online café ordering system to optimize order processing efficiency using vanilla HTML, CSS, JavaScript, PHP, and MySQL. Innovative discount system based on streak maintenance inspired from Snapchat for more customer engagement.',
    ARRAY['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    NULL,
    'https://github.com/asief-iqbal/SnapCafe',
    'web',
    TRUE
);

-- Insert sample data for skills
INSERT INTO skills (name, category, level) VALUES
-- Expertise
('AI', 'Expertise', 95),
('ML', 'Expertise', 90),
('LLM', 'Expertise', 88),
('AI agents', 'Expertise', 85),
('Generative AI', 'Expertise', 90),
('Data Science', 'Expertise', 92),
('Data Analysis', 'Expertise', 88),
('Data Engineering', 'Expertise', 85),
('Statistical Modeling', 'Expertise', 80),
-- Languages
('Python', 'Languages', 95),
('JavaScript', 'Languages', 90),
('SQL', 'Languages', 88),
('PHP', 'Languages', 75),
('CSS', 'Languages', 85),
-- Frameworks
('Pytorch', 'Frameworks', 90),
('TensorFlow', 'Frameworks', 85),
('Next.js', 'Frameworks', 92),
('React', 'Frameworks', 90),
('TailwindCSS', 'Frameworks', 88),
('Node.js', 'Frameworks', 85),
('Express.js', 'Frameworks', 80),
('MongoDB', 'Frameworks', 75),
-- Tools
('AWS', 'Tools', 80),
('Git', 'Tools', 90),
('n8n', 'Tools', 70),
('Docker', 'Tools', 75);

-- Insert sample data for certifications
INSERT INTO certifications (title, issuer, date, credential_id) VALUES
('AI Engineer for Data Scientists Associate Certification', 'Datacamp', '2024-01-15', 'DC-AI-ENG-2024'),
('Machine Learning Foundations', 'AWS Educate', '2023-11-20', 'AWS-ML-FOUND-2023'),
('AI Fundamentals certificate', 'Datacamp', '2023-09-10', 'DC-AI-FUND-2023');

-- Insert sample data for education
INSERT INTO education (degree, institution, start_date, end_date, location, description, gpa) VALUES
('Bachelor of Science', 'BRAC University', '2022-01-01', '2026-01-01', 'Dhaka, Bangladesh', 'High Distinction - Awarded to candidates whose CGPA is between 3.65 to 3.79', 3.70);

-- Insert sample data for services
INSERT INTO services (title, description, icon, order_index) VALUES
('Web Development', 'Creating responsive, performant websites using modern technologies and frameworks that drive business growth.', 'Code', 1),
('AI', 'Building intelligent systems and solutions using the latest advancements in artificial intelligence.', 'Brain', 2),
('Machine Learning', 'Developing machine learning models for predictive analytics, automation, and data-driven insights.', 'Robot', 3),
('Data Engineering', 'Designing and maintaining scalable data pipelines and infrastructure for modern AI applications.', 'Database', 4),
('Full Stack Development', 'Creating robust APIs and server architectures that power scalable web applications.', 'Server', 5);

-- Enable Row Level Security (RLS) for better security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to most tables (for portfolio display)
CREATE POLICY "Allow public read access to projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access to skills" ON skills FOR SELECT USING (true);
CREATE POLICY "Allow public read access to certifications" ON certifications FOR SELECT USING (true);
CREATE POLICY "Allow public read access to education" ON education FOR SELECT USING (true);
CREATE POLICY "Allow public read access to services" ON services FOR SELECT USING (true);

-- Create policy for contacts (only allow insert, not read)
CREATE POLICY "Allow public insert to contacts" ON contacts FOR INSERT WITH CHECK (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;

