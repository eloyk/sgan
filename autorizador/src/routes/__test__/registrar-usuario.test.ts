import request from 'supertest';
import { app } from '../../app'

//it('returns a 201 on successful signup', async () => {
//    return request(app)
//    .post('/api/usuario/registrousuario')
//    .send({
//        email: 'prueba1@gmail.com',
//        password: '123456'
//    })
//    .expect(201);
//});

it('returns a 400 with an invalid email', async () => {
    return request(app)
    .post('/api/usuario/registrousuario')
    .send({
        email: 'prueba1',
        password: '123456'
    })
    .expect(400);})

    it('returns a 400 with an invalid password', async () => {
        return request(app)
        .post('/api/usuario/registrousuario')
        .send({
            email: 'prueba1',
            password: '123'
        })
        .expect(400);
    })

    it('returns a 400 with missing email ans password', async () => {
        await request(app)
        .post('/api/usuario/registrousuario')
        .send({
            email: 'prueba@test.com'
         })
        .expect(400); 

        await request(app)
        .post('/api/usuario/registrousuario')
        .send({ 
            password: '12345678'
        })
        .expect(400);
    })

    //it('returns a 201 on duplicate emails', async () => {
    //    await request(app)
    //    .post('/api/usuario/registrousuario')
    //    .send({
    //        email: 'prueba1@gmail.com',
    //        password: '123456'
    //    })
    //    .expect(201);
//
    //    await request(app)
    //    .post('/api/usuario/registrousuario')
    //    .send({
    //        email: 'prueba1@gmail.com',
    //        password: '123456'
    //    })
    //    .expect(400);
    //});

    //it('Set a cookie after successful signup', async () => {
    //    const response = await request(app)
    //    .post('/api/usuario/registrousuario')
    //    .send({
    //        email: 'prueba1@gmail.com',
    //        password: '123456'
    //    })
    //    .expect(201);
//
    //    expect(response.get('Set-Cookie')).toBeDefined();
    //});