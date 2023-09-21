package com.example.ussdsystem;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private EditText ussdInput;
    private TextView ussdResponse;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ussdInput = findViewById(R.id.ussdInput);
        ussdResponse = findViewById(R.id.ussdResponse);

        // Set click listeners for numeric keypad buttons
        int[] keypadButtons = {
                R.id.key_1, R.id.key_2, R.id.key_3,
                R.id.key_4, R.id.key_5, R.id.key_6,
                R.id.key_7, R.id.key_8, R.id.key_9,
                R.id.key_star, R.id.key_hash, R.id.key_0,
                R.id.key_clear, R.id.sendUSSDButton
        };

        for (int buttonId : keypadButtons) {
            Button button = findViewById(buttonId);
            button.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    onKeypadButtonClick(button);
                }
            });
        }

        // Set click listener for the "Send USSD" button
        Button sendUSSDButton = findViewById(R.id.sendUSSDButton);
        sendUSSDButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onSendUSSDButtonClick();
            }
        });
    }

    private void onKeypadButtonClick(Button button) {
        String currentInput = ussdInput.getText().toString();
        String buttonText = button.getText().toString();

        // Handle button clicks (append text to USSD input)
        if (buttonText.equals("Clear")) {
            ussdInput.getText().clear();
        } else {
            // Append the button's text to the current input
            ussdInput.setText(currentInput + buttonText);

            // Move the cursor to the end of the text
            ussdInput.setSelection(ussdInput.getText().length());
        }
    }


    private void onSendUSSDButtonClick() {
        // Handle sending USSD request and displaying the response here
        // This part would involve making network requests and parsing USSD responses.
        String ussdCode = ussdInput.getText().toString();
        ussdResponse.setText("");

        // Clear the USSD input field after pressing Send
        ussdInput.getText().clear();
    }
}
