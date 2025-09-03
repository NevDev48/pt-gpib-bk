export default function SimpleMap() {
    return (
        <div className="w-full h-96 rounded-xl shadow-lg overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.0875649983744!2d116.1139922!3d-8.5913906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf5dde8ceed9%3A0xbd436c26375cb44!2sGPIB%20Immanuel%20Bung%20Karno%20Mataram!5e0!3m2!1sen!2sid!4v1693737600000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GPIB Immanuel Bung Karno Mataram"
                className="w-full h-full"
            />
        </div>
    );
}
