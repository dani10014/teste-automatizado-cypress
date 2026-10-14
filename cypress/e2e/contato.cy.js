    describe("Gestão de contatos",()=>{
        beforeEach(() => {
            cy.visit('https://ebac-agenda-contatos-tan.vercel.app/');
        });

        it("Adicionar contato na lista",() =>{
          /***Captura os inputs e preenche */
            cy.get('input[type="text"]').type("Dijalma")
            cy.get('input[type="email"]').type("dijalma0@gmail.com")
            cy.get('input[type="tel"]').type("5567991070222")
    
          /**Clica em adicionar */
            cy.get('.adicionar').click();
            
          /**Verifica se apareceu */
            cy.contains("Dijalma").should('be.visible');
        })
        it("Editar card",()=>{
          /**Captura o card recem criado */
            cy.contains('Dijalma')
                .closest('.sc-beqWaB.eQdhbg.contato')
                .find('.edit').click();

          /**Edita o nome do contato */
            cy.get('input[type="text"]').clear().type("Daniel")
            cy.get('.alterar').click()

            cy.contains("Daniel").should("be.visible")
        })
        it("Deletar Card",()=>{
          /**Busca o card recem editado e deleta. */
            cy.contains("Daniel")
                .closest(".sc-beqWaB.eQdhbg.contato")
                .find('.delete').click()
            cy.contains("Daniel").should("not.exist")
        })
    })

