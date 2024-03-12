import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

const WhatsAppButton: FunctionalComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        // Lógica para abrir o link do WhatsApp
        window.open('https://api.whatsapp.com/send?phone=5511977205601', '_blank');
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '30px',
                zIndex: 9999,
            }}
        >
            <div
                onClick={handleClick}
                style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    transform: isOpen ? 'scale(1.1)' : 'scale(1)',
                }}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
                    alt="WhatsApp Icon"
                    style={{ width: '50%', height: '50%' }}
                />
            </div>
            {isOpen && (
                <div
                style={{
                    position: 'absolute',
                    bottom: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#fff',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                    zIndex: 99999,
                    maxWidth: '200px',
                }}
                >
                    Clique aqui para fazer seu orçamento!
                </div>
            )}
        </div>
    );
};

export default WhatsAppButton;
