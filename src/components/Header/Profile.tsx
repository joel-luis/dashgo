import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Joel Luis</Text>
          <Text color="gray.300" fontSize="small">
            joelluis73@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Joel Luis"
        src="https://avatars.githubusercontent.com/u/72585274?v=4"
      />
    </Flex>
  );
}
