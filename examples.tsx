// "use client";

// import { Button } from "flowbite-react";

// type ButtonProps = {
//   color?: "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
//   className?: string;
//   userAgent: Record<string, number>;
//   onClick?: () => void;
//   children?: React.ReactNode;
// };

// function Component({ color = "alternative", className, userAgent, onClick }: ButtonProps) {
//   console.log(userAgent); // you can use it here if needed

//   return (
//     <div className="flex justify-center gap-4 m-5">
//       <Button color={color} className={className} onClick={()=>{
//         alert("Button clicked");
//       }} >
//         Alternative
//       </Button>
//     </div>
//   );
// }

// export default Component;

// "use client";

// interface ButtonProps {
//   color?:
//     | "alternative"
//     | "dark"
//     | "light"
//     | "green"
//     | "red"
//     | "yellow"
//     | "purple";
//   className?: string;

//   onClick?: () => void;
//   children?: React.ReactNode;
//   title?: string;
// }

// function Button({ title }: ButtonProps) {
//   return <button>{title}</button>;
// }

// function Page() {
//   return (
//     <div className="flex justify-center gap-4 m-5">
//       <Button  />
//     </div>
//   );
// }

//  export default Page

// "use client";

// import { ComponentPropsWithoutRef } from "react";

// type ButtonProps = ComponentPropsWithoutRef<"button"> & {
//   color?:
//     | "alternative"
//     | "dark"
//     | "light"
//     | "green"
//     | "red"
//     | "yellow"
//     | "purple";
//   className?: string;
//   onClick?: () => void;
//   children?: React.ReactNode;
// };

// function Button(props: ButtonProps) {
//   return <button {...props}>Button</button>;
// }

// function Page() {
//   return (
//     <div className="flex justify-center gap-4 m-5">
//       <Button
//         className="bg-blue-500 text-white p-2 rounded"
//         onClick={() => alert("Button clicked!")}
//       >
//         Click me
//       </Button>
//     </div>
//   );
// }

// export default Page;

// "use client";

// import { useRef, useState } from "react";

// type User ={
//   name?: string;
//   age?: number;
//   email?: string;
//   password?: string;
// }

// type UserWitoutPassword = Omit<User, "password">;

// type UpdateUser = Partial<User>;

// type UserPublicData = Pick<User, "name" | "email">;

// type status = "active" | "inactive" | "pending" | "suspended";

// type AllowedStatus = Exclude<status, "suspended">;

// function Button() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("Hello");
//   const [active, setActive] = useState(false);

//   const [user, setUser] = useState<User| null>(null);

//    const myButton = useRef<HTMLButtonElement>(null);

//   console.log(user);
//   console.log(count);

// }

// function Page() {
//   return (
//     <div className="flex justify-center gap-4 m-5">
//       <Button
//         className="bg-blue-500 text-white p-2 rounded"
//         onClick={() => alert("Button clicked!")}
//       >
//         Click me
//       </Button>
//     </div>
//   );
// }

// export default Page;

"use client";

let someValue: unknown = "Hello World";
let stringLength: number = (someValue as string).length;

let user: unknown = {
  name: "John",
  age: 30,
};

const newUser = user as { name: string; age: number };

interface Box<T> {
  content: T;
}

const box1: Box<string> = { content: "hello" };
const box2: Box<number> = { content: 42 };
const box3: Box<boolean> = { content: true };

type ApiResponse<T> = {
  data: T;
  error?: string;
  status?: number;
};

const responsive1: ApiResponse<{ name: string; age: number }> = {
  data: {
    name: "John",
    age: 30,
  },
  error: undefined,
};



const responsive2: ApiResponse<string[]> = {
  data: ["apple", "banana", "orange"],
  error: undefined,
};




function Page() {
  const inputElement = document.getElementById("myInput") as HTMLInputElement;

  return;
  <div></div>;
}

export default Page;
