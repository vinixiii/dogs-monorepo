import api from '../services/api';

interface DogImagesDTO {
  message: string[];
  status: string;
}

interface GetDogImagesUseCaseProps {
  breed: string;
}

export const getDogImagesUseCase = async ({ breed }: GetDogImagesUseCaseProps): Promise<string[]> => {
  const dogImagesDTO = await api.get<DogImagesDTO>(`breed/${breed}/images`);

  const images = dogImagesDTO.data.message;

  return images;
};
