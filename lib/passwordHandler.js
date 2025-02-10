import bcrypt from 'bcrypt';



// Encoded password(Hash)
export const hashPassword = async (password) => {
    try {
      const saltRounds = 10;  // Define salt rounds
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      throw new Error('Error hashing password');
    }
  };

