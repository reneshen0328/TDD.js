const Family = require('./familyTree') //require whatever we are exporting form index.js

describe('Family class', () => { //Describe: what are we testing?

	const testFamily = new Family("Rene",["Sandy","Alex"], 'Ryan');	

	test('has a sibling', () => {
	  expect(testFamily.sibling).toBe('Ryan')
	})

    test("has parents",()=>{
        expect(testFamily.parents).toContain("Sandy")
    })

    test("the child of",()=>{
        expect(testFamily.childOf()).toBe("Sandy & Alex");
    })

    test("this family has parents",()=>{
        expect(testFamily).toHaveProperty("parents");
    })

    /*
    test("this family has grandparents",()=>{
        expect(testFamily).toHaveProperty("grandparents");
    })
    */

    /*
    //Testing spyOn code
    
    test("childOf function has been called",()=>{
        const spy = jest.spyOn(Family, 'childOf');
        const isChildOf = Family.childOf();
    
        expect(spy).toHaveBeenCalled();
        expect(isChildOf).toBe("Sandy & Alex");
    })
    */
});

