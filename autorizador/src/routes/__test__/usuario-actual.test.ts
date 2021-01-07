import request from 'supertest';
import { app } from '../../app';

//it('responds with details about the cuerrent user', async () => {
//    const cookie = await global.signin();
//
//    const response = await request(app)
//    .get('/api/usuario/usuarioactual')
//    .set('Cookie', cookie)
//    .send()
//    .expect(200);
//
//    expect(response.body.usuarioActual.email).toEqual('test@test.com');
//});

it('response with null if note authenticated', async () => {
    const response = await request(app)
    .get('/api/usuario/usuarioactual')
    .send()
    .expect(200);

    expect(response.body.usuarioActual).toEqual(null);
});

