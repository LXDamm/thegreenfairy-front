class App {
    async fetchAbsinthe() {
        try {
            const res = await fetch('https://api-extern.systembolaget.se/site/V2/Search/Site?absinthe', {
                cors: 'no-cors',
                headers: {
                    'ocp-apim-subscription-key': '51f38ba7dc3e4267837816b9622b43a5'
                }
            });
            this.pages = await res.json();
        } catch {
            console.log("Can't fetch pages JSON");
        }
    }
    render() {

    }
}

const app = new App();
app.fetchAbsinthe();
app.render();