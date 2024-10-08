




class Listter {

    constructor(){
        this.music = []
        this.url = 'http://localhost:3000';
        
        this.fetchMusic();
        
    }

    async fetchMusic(){
       let res = await fetch(`${this.url}/addMusic`)
       let data = await res.json();
       this.music = data; 

       this.renderMusicCards();
    }
    
    renderMusicCards(){
    
        let container = document.getElementById('container')
        container.innerHTML = "";
        
        for(let music of this.music){
            //make a card 
            let card = document.createElement('div');
            let info = document.createElement('h3');
            let delButton = document.createElement('button')
           
            // let albumInfo = document.createElement('h3');
            
            //modify 
            info.innerText = "(Artist)" + `${music.artist}`+ "-" +"(Album)" +`${music.album}` ;
            delButton.innerText = 'X'; 
            delButton.addEventListener('click', () => {
                
                this.deleteMusic(music);
            })
            
            //albumInfo.innerText = ;

            //append 

            card.append(info,delButton) 
            container.append(card)
        }
    }
    
   
    async deleteMusic(music){
        let url = `${this.url}/addMusic/${music.id}`
        //remove music from database 
        let res = await fetch(url, {
            method: "DELETE",
        })
         data = await res.json(); 
         console.log(data) 

         //this.music = this.music.filter(u => u.id !== music.id)
         //this.renderMusicCards();
    }
    
    
    
    //delete music 
    

    
    




} 


let listter = new Listter(); 



 //post music 
 
async function onAddMusicOnClick(){
    let userInput = document.getElementById('artistName').value;
    let userInput2 = document.getElementById('albumName').value;
    
    testMusic = {artist: userInput , album: userInput2}
    
     res = await fetch('http://localhost:3000/addMusic', {
        method:"POST" , 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(testMusic)

    })
    data = await res.json();

} 

//delete music 
/*async function onDeleteMusicOnClick(){
    fetch('http://localhost:3000/addMusic'{
        method: "DELETE",
    })
} */