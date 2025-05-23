import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast, Bounce } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const Register = () => {
  const { createUser, setUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const user = Object.fromEntries(formData.entries());
    const { email, password, name, photo } = user;

    const userData = {
      name,
      email,
      photo,
      createdAt: new Date(),
    };

    const RegExpLower = /[a-z]/;
    const RegExpUpper = /[A-Z]/;
    const RegExpLength = /^.{6,}$/;

    if (!RegExpLower.test(password)) {
      toast.error("Must have a lowercase letter in the password");
      return;
    }
    if (!RegExpUpper.test(password)) {
      toast.error("Must have an uppercase letter in the password");
      return;
    }
    if (!RegExpLength.test(password)) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        if (result.user) {
          toast.success("🦄 Registration successful", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

          navigate(`${location?.state ?? "/"}`);
        }

        fetch("https://freelanzia-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            const user = data.user;
            setUser(user);
          });

        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Google sign-in successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        navigate(`${location?.state ?? "/"}`);

        const user = result.user;
        const { displayName, email } = user;
        const userProfile = {
          displayName,
          email,
        };

        fetch("https://freelanzia-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            const user = data.user;
            setUser(user);
          });

        setUser(user);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="p-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>

          <div className="px-8 py-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-orange-50">
                  Create Account
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-600 shadow-sm"
            >
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </motion.button>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-600"></div>
              <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">
                OR
              </span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-600"></div>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    required
                    className="peer w-full px-4 py-3 pt-6 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-sm peer-focus:text-orange-500">
                    First Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="photo"
                    required
                    className="peer w-full px-4 py-3 pt-6 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-sm peer-focus:text-orange-500">
                    Photo URL
                  </label>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer w-full px-4 py-3 pt-6 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-sm peer-focus:text-orange-500">
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  required
                  className="peer w-full px-4 py-3 pt-6 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder=" "
                />
                <label className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-sm peer-focus:text-orange-500">
                  Password
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:shadow-lg"
              >
                Create Account
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-orange-500 dark:text-orange-400 font-medium hover:underline hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
