import urlify from "./urlify"

// unit test
describe('Testing urlify function', () => {

    it('should convert title case to url-case',()=>{
       expect(urlify("Bond Street To Baker Street")).toBe("bond-street-to-baker-street");
      })

    it('should convert uppercase to url-case',()=>{
        expect(urlify("BOND STREET TO BAKER STREET")).toBe("bond-street-to-baker-street");
      })

      it('should convert lower case to url-case',()=>{
        expect(urlify("bond street to baker street")).toBe("bond-street-to-baker-street");
      })

      it('should convert mixed case to url-case',()=>{
        expect(urlify("BoND StreEt to BAKer StREET")).toBe("bond-street-to-baker-street");
      })

});