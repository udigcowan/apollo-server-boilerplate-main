import { RESTDataSource } from 'apollo-datasource-rest';
import { Context } from '../config';
import { QueryTestArgs, QueryTodoitemArgs, TestResponse, ToDoItem } from '../types/generated/graphql';

//Does this need to be duplicated to create the class needed to connect the GetToDoItemObject to the C# project?
export class TestService extends RESTDataSource<Context> {
  constructor(baseURL?: string) {
    super();
    if (baseURL) {
      this.baseURL = baseURL;
    } else {
      throw new URIError('URL not provided for TestService API');
    }
  }

  async getTestObject(input: QueryTestArgs): Promise<TestResponse> {
    return { id: 1, name: 'testName' } as TestResponse;
  }

  async getTestObjectViaREST(input: QueryTestArgs): Promise<TestResponse> {
    var result = await this.get(`test/${input.id}`) as TestResponse;
    return result;
  }
//Is the return line (line 26) formatted correctly?
  async GetToDoItemObject(input: QueryTodoitemArgs): Promise<ToDoItem> {
    return {ID: 1, NAME: "TestItem", ISCOMPLETE:true} as ToDoItem;
  }
  
  async GetToDoItemObjectViaRest(input: QueryTodoitemArgs): Promise<ToDoItem> {
    var result = await this.get(`todoitem/${input.ID}`) as ToDoItem;
    return result;
  }

}
