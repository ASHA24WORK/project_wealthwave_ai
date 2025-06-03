import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Wallet, 
  BarChart2, 
  PieChart, 
  TrendingUp, 
  Shield, 
  Check, 
  Github, 
  Twitter, 
  Linkedin 
} from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212]">
      {/* Header */}
      <header className="bg-white dark:bg-[#1e1e2e] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">WealthWave</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-primary">Features</a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary">Pricing</a>
              <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-primary">Testimonials</a>
              <a href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-primary">FAQ</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ride the Wave to Financial Freedom!
              </h1>
              <p className="mt-6 text-xl text-purple-100">
                Take control of your finances with our AI-powered personal finance tool. Track expenses, set budgets, and reach your financial goals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/signup"
                  className="bg-white text-primary hover:bg-purple-50 font-bold py-3 px-6 rounded-lg shadow-lg transition-all flex items-center justify-center"
                >
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/dashboard"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center"
                >
                  Try Demo
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Financial Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Powerful Features</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to take control of your financial life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-[#1e1e2e] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Expense Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Automatically categorize and track your expenses with AI-powered tools to understand where your money is going.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-[#1e1e2e] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <PieChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Budget Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create custom budgets for different categories and get real-time alerts when you're approaching your limits.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-[#1e1e2e] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Investment Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor your investments in real-time and get AI-powered insights to optimize your portfolio performance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 dark:bg-[#1e1e2e] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Savings Goals
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Set personalized savings goals and track your progress with visual indicators and smart recommendations.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 dark:bg-[#1e1e2e] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Financial Reports
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Generate detailed financial reports to analyze your spending patterns and financial health over time.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 dark:bg-[#1e1e2e] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Multi-Account Sync
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect all your financial accounts to get a comprehensive view of your entire financial picture in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100 dark:bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Ready to take control of your finances?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/signup"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors"
            >
              Create Free Account
            </Link>
            <Link
              to="/dashboard"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/5 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#1e1e2e] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Wallet className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">WealthWave</span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Your personal finance assistant, powered by AI.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Product
              </h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Features</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Testimonials</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">About</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <p className="text-gray-500 dark:text-gray-400 text-center">
              &copy; {new Date().getFullYear()} WealthWave AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;