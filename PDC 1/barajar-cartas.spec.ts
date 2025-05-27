import { barajarCartas } from "./barajar-cartas";

describe("bajajarartas", () => {
    it("Devolver array con los mismos emojis", () => {

        //Arrange
        const original = ['🐶', '🐱', '🐭', '🐹'];
        const copia = [...original];

        //Act
        barajarCartas(original);

        //Assert
        expect(original.length).toBe(original.length); 
        expect(original.sort()).toEqual(original.sort()); 
    })
    it('No debe modificar el array original', () => {
        //Arrange
        const original = ['🐶', '🐱', '🐭', '🐹'];
        const copia = [...original];
    
        //Act
        barajarCartas(original);
    
        //Assert
        expect(original).toBe(copia);
    });
    
})