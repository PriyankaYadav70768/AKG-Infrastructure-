import { z } from 'zod';
import { roles } from '../data/roles';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().default(false),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const joinSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[+0-9\s()-]{8,18}$/, 'Please enter a valid phone number (e.g. +91 98765 43210)'),
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address'),
  city: z
    .string()
    .min(1, 'City is required')
    .min(2, 'City must be at least 2 characters'),
  role: z
    .string()
    .min(1, 'Please select your role / designation')
    .refine((val) => (roles as readonly string[]).includes(val), {
      message: 'Please choose a valid role from the list',
    }),
  teamLeaderCode: z.string().optional().default(''),
  message: z.string().max(1000, 'Message cannot exceed 1000 characters').optional().default(''),
});

export type JoinFormData = z.infer<typeof joinSchema>;

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address'),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
