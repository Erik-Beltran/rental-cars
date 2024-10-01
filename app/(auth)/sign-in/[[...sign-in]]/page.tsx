import { SignIn } from "@clerk/nextjs";

export default function Page() {
   return (
    <div>
      <SignIn />
      <code>
        <p className="mt-10">
          <strong>UserName:</strong> guest@rentalcars.com
        </p>
        <p>
          <strong>Password:</strong> rentalcars
        </p>
      </code>
    </div>
  );
}
