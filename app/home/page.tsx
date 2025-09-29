"use client"
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";



export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    
  },[router, session]);

  if (status === 'loading') return <Text>Loading...</Text>;
  if (!session) return <Text>ログインしていません</Text>;

  return (
    <Box>
        <Text>home</Text>
    </Box>
  );
}

