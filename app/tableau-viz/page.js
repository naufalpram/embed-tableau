import { generateJwt } from '@/_helper/jwt';
import TableauReport from './tableau';

export default function AboutPage() {
  const jwtToken = generateJwt();

  return (
    <main>
        <TableauReport token={jwtToken} />
    </main>
  )
}
