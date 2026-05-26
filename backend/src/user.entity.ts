import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;
}

/**A forma mais elegante e recomendada para o TypeORM é usar o ponto de exclamação (!) logo após o nome da propriedade. Isso diz explicitamente ao TypeScript: "Confia em mim, eu sei o que estou fazendo, essa propriedade vai ser inicializada em outro lugar (pelo ORM)". */