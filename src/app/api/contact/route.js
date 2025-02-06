export async function POST(req) {
    try {
      const { name, email, tel, message } = await req.json();
  
      if (!name || !email || !tel || !message) {
        return new Response(JSON.stringify({ error: "Заповніть усі поля" }), { status: 400 });
      }
  
  
      return new Response(JSON.stringify({ success: true, message: "Форма успішно надіслана!" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Помилка сервера" }), { status: 500 });
    }
  }
  