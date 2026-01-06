/*
  # Create applications table

  1. New Tables
    - `applications`
      - `id` (uuid, primary key)
      - `name` (text) - client name
      - `phone` (text) - phone number
      - `email` (text) - email address
      - `city` (text, nullable) - city
      - `created_at` (timestamp) - created date

  2. Security
    - Enable RLS on `applications` table
    - Add policy for anyone to insert applications
*/

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  city text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert applications"
  ON applications FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can view applications"
  ON applications FOR SELECT
  TO service_role
  USING (true);