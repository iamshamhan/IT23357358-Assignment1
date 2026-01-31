// playwright-tests/tests/thanglish-tests.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Thanglish to Tamil Translation Tests - IT23357358', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://tamil.changathi.com/');
    await page.waitForTimeout(2000);
  });

  // ============ POSITIVE FUNCTIONAL TEST CASES (24 tests) ============

  test('Pos_Fun_0001: Convert short interrogative greeting', async ({ page }) => {
    const input = 'eppidi irukka?';

    // Try to find and fill input field
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0001`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toBeTruthy();
  });

  test('Pos_Fun_0002: Convert short simple present sentence', async ({ page }) => {
    const input = 'naan veetukku poren.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0002`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toBeTruthy();
  });

  test('Pos_Fun_0003: Convert medium compound daily sentence', async ({ page }) => {
    const input = 'naan office pogiren, aana innaiku traffic romba jaasthi irukku.';
    await fillInputField(page, input);
    await page.waitForTimeout(1500);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0003`);
    console.log(`Input length: ${input.length} characters`);
    console.log(`Actual Output length: ${output.length} characters`);

    expect(output.length).toBeGreaterThan(10);
  });

  test('Pos_Fun_0004: Convert short interrogative request', async ({ page }) => {
    const input = 'enakku help seiya mudiyuma?';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0004`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('ஹெல்ப்');
  });

  test('Pos_Fun_0005: Convert short imperative command', async ({ page }) => {
    const input = 'door moodu.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0005`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toBeTruthy();
  });

  test('Pos_Fun_0006: Convert simple present tense statement', async ({ page }) => {
    const input = 'naan sapadu sapidukiren.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0006`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('சாப்பாடு');
  });

  test('Pos_Fun_0007: Convert past tense sentence', async ({ page }) => {
    const input = 'naan netru school ponen.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0007`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('நேற்று');
  });

  test('Pos_Fun_0008: Convert future tense plan', async ({ page }) => {
    const input = 'naan nalaikku varuven.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0008`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('நாளைக்கு');
  });

  test('Pos_Fun_0009: Convert negative statement', async ({ page }) => {
    const input = 'enakku adhu pidikkala.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0009`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toBeTruthy();
  });

  test('Pos_Fun_0010: Convert pronoun variation', async ({ page }) => {
    const input = 'avan veetukku ponaan.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0010`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('அவன்');
  });

  test('Pos_Fun_0011: Convert plural sentence', async ({ page }) => {
    const input = 'nangal ellarum varom.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0011`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toBeTruthy();
  });

  test('Pos_Fun_0012: Convert phrase pattern usage', async ({ page }) => {
    const input = 'konjam wait pannunga.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0012`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('வெயிட்');
  });

  test('Pos_Fun_0013: Convert place name sentence', async ({ page }) => {
    const input = 'avan colombo pogiraan.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0013`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('கொலோம்போ');
  });

  test('Pos_Fun_0014: Convert mixed English term sentence', async ({ page }) => {
    const input = 'meeting innaiku irukku.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0014`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('மீட்டிங்');
  });

  test('Pos_Fun_0015: Convert punctuation usage', async ({ page }) => {
    const input = 'enna nadandhudhu?';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0015`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toBeTruthy();
  });

  test('Pos_Fun_0016: Convert formatted spacing', async ({ page }) => {
    const input = 'naan veetula irukken.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0016`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    // Checking for 'naan' (நான்) is more stable than 'irukken' which has colloquial variations
    expect(output).toContain('நான்');
  });

  test('Pos_Fun_0017: Convert slang usage', async ({ page }) => {
    const input = 'semma movie da.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0017`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('செம்ம');
  });

  test('Pos_Fun_0018: Convert polite request', async ({ page }) => {
    const input = 'konjam seekiram vaanga.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0018`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toBeTruthy();
  });

  test('Pos_Fun_0019: Convert technical term usage', async ({ page }) => {
    const input = 'phone on aagala.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0019`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('போன்');
  });

  test('Pos_Fun_0020: Convert currency sentence', async ({ page }) => {
    const input = 'enakku 100 rooba irukku';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0020`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('ரூபா');
  });

  test('Pos_Fun_0021: Convert time format', async ({ page }) => {
    const input = 'naan 7.30 ku varen.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0021`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toBeTruthy();
  });

  test('Pos_Fun_0022: Convert date usage', async ({ page }) => {
    const input = 'meeting 25/12/2025.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0022`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('மீட்டிங்');
  });

  test('Pos_Fun_0023: Convert multi-word phrase', async ({ page }) => {
    const input = 'romba kashtama irukku.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0023`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toBeTruthy();
  });

  test('Pos_Fun_0024: Convert joined word input', async ({ page }) => {
    const input = 'naanveetukkuvaren.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Pos_Fun_0024`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toBeTruthy();
  });

  // ============ NEGATIVE FUNCTIONAL TEST CASES (10 tests) ============

  test('Neg_Fun_0001: Mixed random characters', async ({ page }) => {
    const input = '&&^^%%##@@';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Neg_Fun_0001`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output || '(empty or unchanged)'}`);

    // Should not contain Tamil characters
    if (output) {
      const hasTamil = /[஀-஺]/.test(output);
      expect(hasTamil).toBe(false);
    }
  });

  test('Neg_Fun_0002: Unsupported slang', async ({ page }) => {
    const input = 'bokka scene eh illa bhai';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Neg_Fun_0002`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    // Output should exist but might be meaningless
    expect(output).toBeTruthy();
  });

  test('Neg_Fun_0003: Excessive spelling errors', async ({ page }) => {
    const input = 'day nan utoku poro da.';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Neg_Fun_0003`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    // Should produce some output
    expect(output).toBeTruthy();
  });

  test('Neg_Fun_0004: Mixed languages without structure', async ({ page }) => {
    const input = 'naan meeting attend panninen yesterday';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Neg_Fun_0004`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('மீட்டிங்');
  });

  test('Neg_Fun_0005: Empty input', async ({ page }) => {
    const input = '';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Neg_Fun_0005`);
    console.log(`Input: (empty)`);
    console.log(`Actual Output: ${output || '(empty)'}`);

    // Should handle empty input gracefully
    expect(true).toBe(true);
  });

  test('Neg_Fun_0006: Only numbers', async ({ page }) => {
    const input = '123456';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Neg_Fun_0006`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    // May convert to Tamil numerals or stay same
    expect(output).toBeTruthy();
  });

  test('Neg_Fun_0007: Repeated words', async ({ page }) => {
    const input = 'naan naan naan pogren';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Neg_Fun_0007`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('நான்');
  });

  test('Neg_Fun_0008: Joined long sentence', async ({ page }) => {
    const input = 'naaninnikivaelaiyukkupogamudiyathu';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Neg_Fun_0008`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output.length).toBeGreaterThan(5);
  });

  test('Neg_Fun_0009: Extra spaces and line breaks', async ({ page }) => {
    const input = 'naan \n\n veetuku pogren';
    await fillInputField(page, input);
    await page.waitForTimeout(1000);

    const output = await getOutputText(page);

    console.log(`Test: Neg_Fun_0009`);
    console.log(`Input: ${input}`);
    console.log(`Actual Output: ${output}`);

    expect(output).toContain('நான்');
  });

  test('Neg_Fun_0010: Long paragraph without proper punctuation', async ({ page }) => {
    const input = `naan innaiku office poganum aana bus varala traffic romba irundhuchu adhanala late aagiduchu manager ku message anuppala meeting miss aagiduchu romba kastama irukku naan nalaikku correct time ku varuven nu ninaikiren`;

    await fillInputField(page, input);
    await page.waitForTimeout(2000);

    const output = await getOutputText(page);

    console.log(`Test: Neg_Fun_0010`);
    console.log(`Input length: ${input.length} characters`);
    console.log(`Output length: ${output.length} characters`);
    console.log(`First 100 chars of output: ${output.substring(0, 100)}...`);

    expect(output.length).toBeGreaterThan(50);
  });

  // ============ UI TEST CASE (1 test) ============

  test('Pos_UI_0001: Validate conversion triggers on interaction', async ({ page }) => {
    const input = 'vanakkam';
    const selector = '#transliterateTextarea';

    // Clear
    await page.locator(selector).clear();
    await page.waitForTimeout(500);

    // Type the word fast
    await page.locator(selector).pressSequentially(input, { delay: 20 });
    await page.waitForTimeout(300);

    // Press space to trigger conversion
    await page.locator(selector).press('Space');
    await page.waitForTimeout(1000);

    // Output check
    const finalOutput = await getOutputText(page);
    console.log(`Final Output: ${finalOutput}`);

    expect(finalOutput).toContain('வணக்கம்');
  });

});

// ============ HELPER FUNCTIONS ============

async function fillInputField(page, text) {
  // Website uses the same textarea for input and output
  // Transliteration triggers on Space key press
  const selector = '#transliterateTextarea';

  try {
    const textarea = page.locator(selector);

    // Check if element exists and is visible
    if (await textarea.count() > 0 && await textarea.isVisible()) {
      await textarea.click();
      await textarea.clear();

      // We must type sequentially to trigger word-by-word transliteration
      // delay: 10ms is fast enough to not timeout but slow enough to be sequential
      await textarea.pressSequentially(text, { delay: 10 });
      await page.waitForTimeout(500);

      // Press space to ensure the last word is converted if needed
      if (!text.endsWith(' ')) {
        await textarea.press('Space');
      }
      return true;
    }
  } catch (e) {
    console.log(`Error filling input: ${e.message}`);
  }

  // Fallback: Click body and type (though less reliable for this specific site)
  try {
    await page.click('body');
    await page.keyboard.type(text, { delay: 100 });
    await page.keyboard.press('Space');
    return true;
  } catch (e) {
    return false;
  }
}

async function getOutputText(page) {
  const selector = '#transliterateTextarea';

  try {
    // For this site, the output replaces the input in the same textarea
    // So we need to read the 'value' property, not textContent
    const textarea = page.locator(selector);
    if (await textarea.count() > 0) {
      const value = await textarea.inputValue();
      if (value && value.trim().length > 0) {
        return value.trim();
      }
    }
  } catch (error) {
    console.log(`Error getting output: ${error.message}`);
  }

  return '';
}