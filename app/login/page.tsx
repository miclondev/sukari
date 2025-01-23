export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Log in to your account</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-input px-3 py-2"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border border-input px-3 py-2"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#0A3D2D] text-white py-2 rounded-md hover:bg-[#0A3D2D]/90"
        >
          Log in
        </button>
      </form>
    </div>
  );
}