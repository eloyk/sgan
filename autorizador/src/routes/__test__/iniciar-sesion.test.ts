import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
    const response = await request(app)
    .post('/api/usuario/iniciarsesion')
    .send({
        email: 'prueba1@gmail.com',
        password: '123456'
    })
    .expect(400);
});

//it('fails when an incorrect password is supplied', async () => {
//    await request(app)
//    .post('/api/usuario/registrousuario')
//    .send({
//        email: 'test@gmail.com',
//        password: '123456'
//    })
//    .expect(201);
//
//    await request(app)
//    .post('/api/usuario/iniciarsesion')
//    .send({
//        email: 'test@gmail.com',
//        password: 'ytrtjhvtyguh'
//    })
//    .expect(400);
//});

//it('Response with a cookie when given valid credentials', async () => {
//    await request(app)
//    .post('/api/usuario/registrousuario')
//    .send({
//        email: 'test@gmail.com',
//        password: '123456'
//    })
//    .expect(201);
//
//    const response = await request(app)
//    .post('/api/usuario/iniciarsesion')
//    .send({
//        email: 'test@gmail.com',
//        password: '123456'
//    })
//    .expect(200);
//
//    expect(response.get('Set-Cookie')).toBeDefined();
//});