export interface Cat {
  breeds: Breeds[];
  height: number;
  id: string;
  url: string;
  width: number;
}

type Breeds = {
  name: string;
  id: string;
  temperament: string;
  weight: BreedsWeight;
  life_span: string;
};

type BreedsWeight = {
  imperial: string;
  metric: string;
};
