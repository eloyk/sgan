import request from 'supertest';
import { app } from '../../app';

it('returns a 200 on successful signout', async () => {
    return request(app)
    .post('/api/usuario/cerrarsesion')
    .send({
        email: 'prueba1@gmail.com',
        password: '123456'
    })
    .expect(200);

    const response = await request(app)
    .post('/api/usuario/cerrarsesion')
    .send({ })
    .expect(200);
    console.log(response.get('Set-Cookie'));
    expect(response.get('Set-Cookie')[0]).toEqual(
        'express:sess=; path=/; expires=Thu, 01 jJan 1970 00:00:00 GMT; httponly'
    );
});