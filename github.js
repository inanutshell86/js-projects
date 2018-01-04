class GitHub {
    constructor() {
        this.client_id = 'e3e91da0ed34de202415';
        this.client_secret = 'e6ab54808e495badccf6963145062942fcc30079';
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}