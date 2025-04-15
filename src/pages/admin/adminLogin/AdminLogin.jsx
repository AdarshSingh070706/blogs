import React, { useContext } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import myContext from "../../../context/data/myContext";

export default function AdminLogin() {
    const context = useContext(myContext);
    const { mode } = context;

    const isDark = mode === "dark";

    return (
        <div
            className={`flex justify-center items-center min-h-screen transition duration-300 ${
                isDark ? "bg-slate-900" : "bg-slate-100"
            }`}
        >
            {/* Card */}
            <Card
                className={`w-full max-w-md shadow-2xl backdrop-blur-xl bg-opacity-60 rounded-2xl border ${
                    isDark
                        ? "bg-slate-800 border-slate-700"
                        : "bg-white border-slate-200"
                } transition duration-300`}
            >
                {/* CardHeader */}
                <CardHeader
                    floated={false}
                    shadow={false}
                    className={`m-0 grid place-items-center rounded-b-none py-8 px-4 text-center ${
                        isDark ? "bg-slate-100" : "bg-slate-800"
                    }`}
                >
                    <div className="mb-4 rounded-full bg-white/20 p-2 shadow-md">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/727/727399.png"
                            alt="Admin Icon"
                            className="h-20 w-20 object-contain"
                        />
                    </div>

                    <Typography
                        variant="h4"
                        className={`font-bold tracking-wide ${
                            isDark ? "text-slate-800" : "text-slate-100"
                        }`}
                    >
                        Admin Login
                    </Typography>
                </CardHeader>



                

                {/* CardBody */}
                <CardBody className="px-6 py-6">
                    <form className="flex flex-col gap-6">
                        {/* Email Input */}
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            className="focus:ring-2 focus:ring-blue-500 transition"
                            color={isDark ? "white" : "blue"}
                            crossOrigin=""
                        />

                        {/* Password Input */}
                        <Input
                            type="password"
                            label="Password"
                            className="focus:ring-2 focus:ring-blue-500 transition"
                            color={isDark ? "white" : "blue"}
                            crossOrigin=""
                        />

                        {/* Login Button */}
                        <Button
                            fullWidth
                            size="lg"
                            className={`text-base font-semibold shadow-md hover:shadow-lg transition duration-300 ${
                                isDark
                                    ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
                                    : "bg-slate-900 text-slate-100 hover:bg-slate-800"
                            }`}
                        >
                            Login
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}
