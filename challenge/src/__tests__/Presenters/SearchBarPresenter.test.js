import { filterUsers } from "../../Presenters/SearchBarPresenter/SearchBarPresenter";

jest.useFakeTimers();

const usersMock=[
		{name:"1a", email:"12@12.com", address:{city:"12"}},
		{name:"33", email:"45@45.com", address:{city:"b"}},
	]

describe( "SearchBarPresenter", () => {
	describe( "@filterUsers", () => {
		describe( "when there is no query", () => {
			it( "return all the users", () => {
				expect(filterUsers(usersMock,"")).toBe(usersMock);
			})
		})
		describe( "when there a query", () => {
			it( "filters by name", () => {
				expect(filterUsers(usersMock,"a")).toStrictEqual([usersMock[0]]);
			})
			it( "filters by email", () => {
				expect(filterUsers(usersMock,"45")).toStrictEqual([usersMock[1]]);
			})
			it( "filters by city", () => {
				expect(filterUsers(usersMock,"b")).toStrictEqual([usersMock[1]]);
			})
		})
	})
} );
