import React, { useState } from 'react';
import { Eye, EyeOff, ChevronLeft, Moon, Sun } from 'lucide-react';

interface SignUpPageProps {
    onSignUpSuccess: () => void;
    onSignInClick: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
    </svg>
);

const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.293 19.494h2.039L6.482 3.239H4.293l13.315 17.408z" />
    </svg>
);

const TailAdminLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <rect width="32" height="32" rx="6" fill="#4B62FA" />
        <rect x="7" y="16" width="3" height="9" rx="1.5" fill="white" />
        <rect x="14.5" y="10" width="3" height="15" rx="1.5" fill="white" />
        <rect x="22" y="13" width="3" height="12" rx="1.5" fill="white" />
    </svg>
);


const SignUpPage: React.FC<SignUpPageProps> = ({ onSignUpSuccess, onSignInClick, isDarkMode, toggleDarkMode }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSignUpSuccess();
    };

    return (
        <div className="flex justify-center min-h-screen bg-white font-sans max-h-screen overflow-hidden dark:bg-slate-900 transition-colors duration-300">
            {/* Theme Toggle Button */}
            <button
                onClick={toggleDarkMode}
                className="fixed bottom-6 right-6 w-12 h-12 bg-[#4B62FA] hover:bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 transition-colors z-50"
            >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Left Panel: Form Area */}
            <div className="w-full lg:w-1/2 flex flex-col pt-8 px-6 sm:px-12 md:px-24">
                <button 
                  onClick={() => window.location.reload()} 
                  className="flex items-center gap-1.5 text-[14px] text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors self-start mb-auto"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Back to dashboard
                </button>

                <div className="w-full max-w-[420px] mx-auto mb-auto mt-16">
                    <h1 className="text-[32px] font-bold text-slate-900 dark:text-white leading-tight mb-2">Sign Up</h1>
                    <p className="text-[14px] text-slate-500 dark:text-slate-400 mb-8">Enter your email and password to sign up!</p>

                    {/* Social Logins */}
                    <div className="flex gap-4 mb-8">
                        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors border border-transparent">
                            <GoogleIcon />
                            Sign up with Google
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors border border-transparent">
                            <XIcon />
                            Sign up with X
                        </button>
                    </div>

                    <div className="relative mb-8 flex items-center">
                        <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
                        <span className="shrink-0 px-4 text-[13px] text-slate-400 dark:text-slate-500">Or</span>
                        <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">
                                    First Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter your first name"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm transition-all"
                                />
                            </div>
                            
                            <div className="space-y-1.5">
                                <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">
                                    Last Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter your last name"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">
                                Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm transition-all"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[13px] font-bold text-slate-700 dark:text-slate-300 block">
                                Password<span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 pt-2">
                            <label className="flex items-start gap-3 cursor-pointer group w-full">
                                <div className="relative flex items-center mt-1">
                                    <input 
                                        type="checkbox" 
                                        className="peer appearance-none w-4 h-4 rounded border border-slate-300 dark:border-slate-600 dark:bg-slate-800 checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer shrink-0" 
                                    />
                                    <svg className="absolute w-2.5 h-2.5 ml-[-1px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors leading-[1.6]">
                                    By creating an account means you agree to the <span className="text-slate-700 dark:text-slate-200 font-bold">Terms and Conditions</span>, and our <span className="text-slate-700 dark:text-slate-200 font-bold">Privacy Policy</span>
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-[#4B62FA] hover:bg-indigo-600 text-white font-bold text-sm rounded-lg transition-colors mt-2"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-6">
                        Already have an account? <button onClick={onSignInClick} className="text-[#4B62FA] dark:text-indigo-400 font-medium hover:underline">Sign In</button>
                    </p>
                </div>
            </div>

            {/* Right Panel: Branding Area */}
            <div className="hidden lg:flex w-1/2 bg-[#1B1E40] relative overflow-hidden flex-col items-center justify-center">
                {/* Decorative Grid Overlay */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                ></div>
                {/* Highlight active block for decoration (top right) */}
                <div className="absolute top-[80px] right-[40px] w-10 h-10 bg-white/5 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center text-center px-12">
                    <div className="flex items-center gap-3 mb-4">
                        <TailAdminLogo />
                        <span className="text-3xl font-bold text-white tracking-tight">TailAdmin</span>
                    </div>
                    <p className="text-[15px] font-medium text-slate-400 max-w-sm leading-relaxed">
                        Free and Open-Source Tailwind CSS Admin<br />Dashboard Template
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
