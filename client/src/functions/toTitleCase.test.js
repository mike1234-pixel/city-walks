import toTitleCase from "./toTitleCase"

// unit test
describe('Testing toTitleCase function', () => {

    test('should convert lower case to title case', () => {
        expect(toTitleCase("bond street to baker street")).toBe("Bond Street To Baker Street");
      }) 

    test('should convert upper case to title case', () => {
    expect(toTitleCase("BOND STREET TO BAKER STREET")).toBe("Bond Street To Baker Street");
    }) 

    test('should mixed case to title case', () => {
        expect(toTitleCase("BoNd sTreEt TO BAKer StReET")).toBe("Bond Street To Baker Street");
      }) 
});