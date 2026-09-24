DROP POLICY IF EXISTS "Anyone can submit an enquiry" ON public.enquiries;

CREATE POLICY "Public enquiry submissions must be well formed"
ON public.enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 2 AND 100
  AND length(btrim(email)) BETWEEN 5 AND 255
  AND email ~ '^[^@\s]+@[^@\s.]+\.[^@\s]+$'
  AND length(btrim(message)) BETWEEN 10 AND 2000
  AND (company IS NULL OR length(company) <= 120)
  AND (phone IS NULL OR length(phone) <= 40)
  AND (service IS NULL OR length(service) <= 120)
  AND (sites IS NULL OR length(sites) <= 120)
  AND created_at BETWEEN (now() - interval '5 minutes') AND (now() + interval '5 minutes')
);

REVOKE SELECT, UPDATE, DELETE ON public.enquiries FROM anon, authenticated;
GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT ALL ON public.enquiries TO service_role;