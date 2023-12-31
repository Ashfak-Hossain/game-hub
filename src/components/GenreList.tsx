import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  const skeletons = Array.from({ length: 10 }, (_, i) => i);

  if (error) return <Text>Something went wrong...</Text>;

  return (
    <>
      <Heading as="h2" fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>

      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                colorScheme={selectedGenre?.id === genre.id ? 'blue' : 'gray'}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="ghost"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
