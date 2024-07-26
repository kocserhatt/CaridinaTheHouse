import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
  return (
    <>
    <div id='card'>
        <h1>POSTLAR</h1>
    <Row style={{gap:"20px", justifyContent:"center"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img4.jpg" />
      <Card.Body>
        <Card.Title>Tür Çeşitliliği</Card.Title>
        <Card.Text>
        Karidesler, dünyada yaklaşık  2.000 farklı türü bulunan kabuklu deniz canlılarıdır.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img5.jpg" />
      <Card.Body>
        <Card.Title>Habitat</Card.Title>
        <Card.Text>
        Genellikle tuzlu sularda yaşasalar da, bazı türler tatlı su ortamlarında da bulunabilir.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img6.jpg" />
      <Card.Body>
        <Card.Title>Beslenme</Card.Title>
        <Card.Text>
        Karidesler omnivor olup, plankton, küçük balıklar ve organik maddelerle beslenirler.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img7.jpg" />
      <Card.Body>
        <Card.Title>Boyut</Card.Title>
        <Card.Text>
        Karidesler, türlerine bağlı olarak birkaç santimetreden 30 santimetreye kadar değişen boyutlarda olabilirler.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img8.jpg" />
      <Card.Body>
        <Card.Title>Renk Değişimi</Card.Title>
        <Card.Text>
        Bazı karides türleri çevrelerine uyum sağlamak için renk değiştirme yeteneğine sahiptir.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img9.jpg" />
      <Card.Body>
        <Card.Title>Üreme</Card.Title>
        <Card.Text>
        Dişi karidesler, yumurtalarını suya bırakır ve erkek karidesler tarafından döllenirler.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img10.jpg" />
      <Card.Body>
        <Card.Title>Ekonomik Değer</Card.Title>
        <Card.Text>
        Karidesler, dünya çapında önemli bir ticari değere sahip olup, balıkçılık ve yetiştiricilikte yaygın olarak bulunur.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img11.jpg" />
      <Card.Body>
        <Card.Title>Sindirim Sistemi</Card.Title>
        <Card.Text>
        Karideslerin sindirim sistemi oldukça basittir ve genellikle karınlarının alt kısmında bulunur.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img12.jpg" />
      <Card.Body>
        <Card.Title>Savunma Mekanizması</Card.Title>
        <Card.Text>
        Bazı karides türleri, düşmanlarından korunmak için hızlı yüzme yeteneklerini kullanır.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img13.jpg" />
      <Card.Body>
        <Card.Title>İskelet Yapısı</Card.Title>
        <Card.Text>
        Karideslerin dış iskeletleri sert bir kalsiyum karbonat kabuğundan oluşur ve büyüdükçe kabuklarını değiştirirler.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img14.jpg" />
      <Card.Body>
        <Card.Title>Temizlikçi Karidesler</Card.Title>
        <Card.Text>
        Bazı karides türleri, diğer balıkların üzerinde biriken parazitleri temizleyerek simbiyotik ilişkiler kurar.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img15.jpg" />
      <Card.Body>
        <Card.Title>Sosyal Davranış</Card.Title>
        <Card.Text>
        Karidesler genellikle sürü halinde yaşar ve sosyal davranışlar sergileyebilirler.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Row>
    </div>
    </>
  );
}

export default BasicExample;