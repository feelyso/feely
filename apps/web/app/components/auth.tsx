"use client";

import React from 'react'
import { createClient } from 'utils/supabase/client';

const AuthButtons = () => {
const supabase = createClient();

const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    console.log("Data", data);
    if (error) {
      console.error('Error logging in with Google:', error.message);
    }
  };

return <button onClick={handleGoogleLogin}>LogIn</button>;
}
export default AuthButtons