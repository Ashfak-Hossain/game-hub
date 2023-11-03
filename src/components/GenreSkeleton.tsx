import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';

const GenreSkeleton = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" marginY={5}>
      <SkeletonCircle size="10" />
      <Skeleton height="25px" width="100px" fadeDuration={1} />
    </Flex>
  );
};

export default GenreSkeleton;
