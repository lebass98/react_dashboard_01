import React, { useState } from 'react';
import { Eye, EyeOff, Github } from 'lucide-react';

interface LoginPageProps {
    onLoginSuccess: () => void;
    onSignUpClick: () => void;
}

const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.293 19.494h2.039L6.482 3.239H4.293l13.315 17.408z" />
    </svg>
);

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onSignUpClick }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('adminnextjs@gmail.com');
    const [password, setPassword] = useState('1234567890');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLoginSuccess();
    };

    return (
        <div className="min-h-screen bg-[#F0F2F9] flex flex-col items-center justify-center p-4 font-sans">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span className="text-4xl font-extrabold text-[#2F3367]">ynex</span>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-[480px] bg-white rounded-[32px] shadow-2xl shadow-slate-200/50 overflow-hidden border border-white/20">
                <div className="p-10">
                    {/* Top Social Login */}
                    <div className="flex justify-center gap-4 mb-10">
                        <div className="p-1 bg-slate-50 rounded-2xl flex gap-1">
                            <button className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200 hover:bg-indigo-700 transition-all">
                                <Github className="w-6 h-6" />
                            </button>
                            <button className="flex items-center justify-center w-14 h-14 rounded-xl bg-white text-orange-500 hover:bg-orange-50 transition-all">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.007 18.933A.75.75 0 0 1 19 20H5a.75.75 0 0 1-.507-1.303l1.884-1.63L3.102 7.828a.75.75 0 0 1 .124-.8l7.5-9a.75.75 0 0 1 1.156-.032l2.364 2.6L19.866 2.13a.75.75 0 0 1 1.25.755l-1.109 16.048z" fill="#FFCA28" />
                                    <path d="M3.102 7.828l3.275 9.24 1.884-1.63L3.102 7.828z" fill="#FFA000" />
                                    <path d="M11.25.196a.75.75 0 0 0-1.156.032l-7.5 9a.75.75 0 0 0-.124.8l3.275 9.24 7.5-9v-10z" fill="#FFC107" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h1 className="text-[28px] font-bold text-[#2F3367]">Sign In</h1>
                        <p className="text-slate-400 mt-2 font-medium">Welcome back Jhon !</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#2F3367] ml-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="adminnextjs@gmail.com"
                                className="w-full px-5 py-4 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all bg-slate-50 text-slate-700 font-medium"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-bold text-[#2F3367]">Password</label>
                                <a href="#" className="text-sm font-bold text-orange-500 hover:text-orange-600">Forget password ?</a>
                            </div>
                            <div className="relative group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-5 py-4 rounded-2xl border border-slate-100 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all bg-slate-50 text-slate-700 font-medium"
                                    placeholder="••••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 p-2 rounded-lg transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-3 ml-1">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="peer appearance-none w-5 h-5 rounded-md border-2 border-slate-200 checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer"
                                />
                                <svg className="absolute w-3.5 h-3.5 text-white left-[3px] pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <label htmlFor="remember" className="text-sm font-semibold text-slate-400 cursor-pointer hover:text-slate-600 transition-colors">Remember password ?</label>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 transition-all active:scale-[0.98] mt-4"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Sign Up Link */}
                    <div className="text-center mt-8">
                        <p className="text-slate-400 text-[15px] font-medium">
                            Dont have an account? <button onClick={onSignUpClick} className="text-indigo-600 font-bold hover:underline">Sign Up</button>
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="relative my-10">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-100"></div>
                        </div>
                        <div className="relative flex justify-center text-xs font-bold uppercase tracking-wider">
                            <span className="px-4 bg-white text-slate-300">OR</span>
                        </div>
                    </div>

                    {/* Bottom Social Logins */}
                    <div className="flex justify-center gap-4">
                        <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-transparent hover:border-indigo-100">
                            <FacebookIcon />
                        </button>
                        <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all border border-transparent hover:border-red-100">
                            <GoogleIcon />
                        </button>
                        <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-all border border-transparent hover:border-slate-800">
                            <XIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
