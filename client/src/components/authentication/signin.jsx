import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Signin() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  // for logging in  through api routes
  const signinUser = (req, res, e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="min-w-[30%] ">
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription>Create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={signinUser}
            className="flex flex-col gap-2 items-center"
          >
            <Input
              type="text"
              placeholder="username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <Input
              type="password"
              placeholder="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <div className="flex gap-2 ">
              <Button type="submit">Sign In</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm">Dont have an account?</p>
          <Link to="/">Click here</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
