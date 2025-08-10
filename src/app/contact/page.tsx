export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="container py-10 max-w-2xl">
      <h1 className="text-3xl tracking-tight mb-4">Contact</h1>
      <form className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm opacity-80">Name</span>
          <input className="border rounded-md h-10 px-3 bg-transparent" placeholder="Your name" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm opacity-80">Email</span>
          <input className="border rounded-md h-10 px-3 bg-transparent" placeholder="you@email.com" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm opacity-80">Message</span>
          <textarea className="border rounded-md p-3 min-h-28 bg-transparent" placeholder="How can we help?" />
        </label>
        <button className="mt-2 h-10 rounded-full bg-black text-white px-5 text-sm w-fit">Send</button>
      </form>
    </main>
  );
}


