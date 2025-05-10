import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-4">Contact Me</h1>
      <p className="text-gray-600 mb-8 text-center max-w-lg">
        Have a project in mind or just want to say hi? Fill out the form below and I’ll get back to you soon.
      </p>
      <ContactForm />
    </main>
  );
}
