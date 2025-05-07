const { describe } = require('yargs');
const { login } = require('./Login');
const { beforeEach, it } = require('jest-circus');

global.fetch = jestfn()

describe ('login', () =>{

    beforeEach (()=>{
        fetch.mockClear();
        localStorage.clear()
    });

    it('should return success tru and store token on successful login', async () =>{
        const mockToken = 'abc123'
        fetch.mockResolvedValueOnce ({
            ok:true,
            json:async () =>({tocken:mockToken})
        })
        const result = await
        login('test@example.com','password123');

        expect(result.success).toBe (true);
        expect(result.tocken).toBe(mockTocken);

        expect (localStorage.getItem('token')).toBe(mockTocken);
    })

   it('should return success false on failed login', async ()=>
{
    fetch.mockResolvedValueOnce({
        ok:false,
        json:async ()=>({message:Invalidcredentials})
    })
    const result = await
    login('test@example.com', 'passwrong')
    expect(result.success).toBe (false);
    expect(result.message).toBe('Invalid credentials');
});

});
