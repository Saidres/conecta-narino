'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Loader2 } from 'lucide-react'
import { loginWithEmailAndPassword, loginWithGoogle } from '../../service/auth'
import { useRouter } from 'next/navigation'
import { ImageSlider } from '@/components/image-slider'

interface LoginForm {
  email: string
  password: string
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true)
    setError('')
    try {
      await loginWithEmailAndPassword(data.email, data.password).then(() => {
        router.push('/proposals')
      })
    } catch (error) {
      console.log(error)
      setError('No se ha podido iniciar sesión. Compruebe sus credenciales.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    setError('')
    try {
      await loginWithGoogle().then(() => {
        router.push('/proposals')
      })
      // Redirect or update state on successful login
    } catch (error) {
      console.log(error)
      setError('Error al iniciar sesión con Google.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleFacebookLogin = async () => {
    setIsLoading(true)
    setError('')
    try {
      alert("En desarrollo")
      // Redirect or update state on successful login
    } catch (error) {
      console.log(error)
      setError('Failed to log in with Facebook.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full bg-cover bg-gray-50 overflow-hidden">
      {/* Columna izquierda - Formulario de inicio de sesión */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 overflow-y-auto bg-spring-green-50">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Inicia sesión en tu cuenta
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="email-address"
                    type="email"
                    autoComplete="email"
                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-spring-green-500 focus:border-spring-green-500 focus:z-10 sm:text-sm"
                    placeholder="Correo electrónico"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-spring-green-500 focus:border-spring-green-500 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                  />
                </div>
              </div>
            </div>

            {(errors.email || errors.password || error) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm mt-2"
              >
                {errors.email?.message || errors.password?.message || error}
              </motion.div>
            )}

            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-spring-green-600 hover:bg-spring-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spring-green-500"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin h-5 w-5 mr-3" />
                ) : (
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-spring-green-500 group-hover:text-spring-green-400" aria-hidden="true" />
                  </span>
                )}
                Ingresar
              </motion.button>
              &nbsp;              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => router.push('/rol')}
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-spring-green-600 hover:bg-spring-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-spring-green-500"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin h-5 w-5 mr-3" />
                ) : (
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-spring-green-500 group-hover:text-spring-green-400" aria-hidden="true" />
                  </span>
                )}
                Registrarme
              </motion.button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">O coninua con</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Ingresar con Google</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={handleFacebookLogin}
                  disabled={isLoading}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Inicia sesión con Facebook</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Columna derecha - Slider de imágenes */}
      <div className="hidden lg:block lg:w-1/2 h-screen">
        <ImageSlider className="h-full w-full object-cover" />
      </div>
    </div>
  )
}

