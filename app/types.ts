export interface IGroup {
    id: number,
    original: string,
    processed: string,
    date?: string,
    dragning?: string
}

export class Group implements IGroup {
    id: number=0;
    original: string='';
    processed: string = '';
    date?: string | undefined;
    dragning?: string | undefined;
}