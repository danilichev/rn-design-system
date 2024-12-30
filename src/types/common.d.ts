type Option<T = string> = {
  label: string;
  value: T;
};

type Orientation = "landscape" | "portrait";

interface Size {
  width: number;
  height: number;
}

type ValueOf<T> = T[keyof T];
