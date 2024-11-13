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

export function Signup() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });

  // for sending data through api routes to database
  const signupUser = (req, res, e) => {
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
            onSubmit={signupUser}
            className="flex flex-col gap-2 items-center"
          >
            <Input
              type="text"
              placeholder="firstname"
              value={data.firstname}
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
            />
            <Input
              type="text"
              placeholder="laststname"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
            />
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
            <Input
              type="password"
              placeholder="firstname"
              value={data.confirmpass}
              onChange={(e) =>
                setData({ ...data, confirmpass: e.target.value })
              }
            />
            <div className="flex gap-2 ">
              <Button type="submit">Sign Up</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <span className="text-sms">
            Already have an account? <Link to="/signin">Click here</Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
