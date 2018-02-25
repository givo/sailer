import { IDescriptor } from "./IDescriptor";
import { IFilterParam } from "./IFilterParam";

export interface ICrudCollection {
    /**
     * Create a single item
     * 
     * @param {*} item 
     * @returns {Promise<string>} The id of the created item
     * @memberof ICrudCollection
     */
    create(item: any): Promise<string>;

    /**
     * Returns all the items who match the specified `filter` and limits the number of returned item to `limit`.
     * 
     * @returns {Promise<Array<IDescriptor>>} 
     * @memberof ICrudCollection
     */
    readMany(limit?: number, filter?: Array<IFilterParam>): Promise<Array<IDescriptor>>;

    /**
     * Returns the item that is represented by the specified `id`.
     * 
     * @param {string} id 
     * @returns {Promise<IDescriptor>} 
     * @memberof ICrudCollection
     */
    readById(id: string): Promise<IDescriptor>;

    /**
     * Updates all the items who match the given filter
     * 
     * @param {Array<IFilterParam>} fields 
     * @param {number} [limit] 
     * @param {Array<IFilterParam>} [filter] 
     * @returns {Promise<number>} 
     * @memberof ICrudCollection
     */
    updateMany(fields: Array<IFilterParam>, limit?: number, filter?: Array<IFilterParam>): Promise<number>;

    /**
     * Updates the item represeted by the specified `id`.
     * 
     * @param {string} id 
     * @param {*} item 
     * @returns {Promise<IDescriptor>} The updated item
     * @memberof ICrudCollection
     */
    updateById(id: string, item: any): Promise<IDescriptor>;

    /**
     * Deletes the item represeted by the specified `id`
     * 
     * @param {string} id the id of the desired item to be delted
     * @returns {Promise<number>} `1` if the item was deleted, otherwise `0`
     * @memberof ICrudCollection
     */
    deleteById(id: string): Promise<number>;

    /**
     * Deletes all the items who the match the specified `filter` and the limits the deletion to `limit` items.
     * 
     * @memberof ICrudCollection
     */
    delete(filter: any, limit: number): Promise<number>;
}