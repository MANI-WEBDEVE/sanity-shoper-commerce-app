export interface ProductDataType {
    name: string;
    image: string;
    extraImages?: string[];
    description?: string;
    CreatedAt: string;
    _id: string;
    price: number;
    slug: string;
    color?: string[];
}